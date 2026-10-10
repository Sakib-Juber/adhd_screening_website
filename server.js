import express from 'express'; import path from 'node:path'; import {fileURLToPath} from 'node:url'; import {randomUUID} from 'node:crypto';
const app=express(),dir=path.dirname(fileURLToPath(import.meta.url)),memory=new Map(),PORT=process.env.PORT||3000;
app.use(express.json({limit:'1mb'})); app.use(express.static(path.join(dir,'dist')));
app.post('/api/sessions',(req,res)=>{const id=randomUUID();memory.set(id,{id,createdAt:new Date().toISOString(),...req.body});res.status(201).json({id})});
app.put('/api/sessions/:id',(req,res)=>{if(!memory.has(req.params.id))return res.status(404).json({error:'Session not found'});memory.set(req.params.id,{...memory.get(req.params.id),...req.body,updatedAt:new Date().toISOString()});res.json({ok:true})});
app.post('/api/reports',(req,res)=>{const id=randomUUID();memory.set('report:'+id,{id,...req.body,createdAt:new Date().toISOString()});res.status(201).json({id,storage:'in-memory'})});
app.get('/api/health',(_req,res)=>res.json({ok:true,storage:'in-memory',records:memory.size}));
app.get('*',(_req,res)=>res.sendFile(path.join(dir,'dist','index.html')));app.listen(PORT,()=>console.log('Clarity API at http://localhost:'+PORT));