SEAL-Frontend
Start App with : 1.yarn  2. yarn serve (dev mode) 3. yarn deploy-bluemix (production)
เมื่อใช้คำสั่งของ Dev mode ระบบจะทำการนำ .env.development มาใช้เองโดยอัตโนมัติ 
ในขณะเดียวกันถ้าใช้ Production ระบบจะทำการ build Vue ออกมาเป็น static และ deploy ขึ้น ibm cloud เองอัตโนมัติทันที
ซึ่งจะนำ .env.production มาใช้งานให้เองอัตโนมัติ  

###################
เช็คดูการทำงานเสลา Build/ Run โปรแกรมได้ที่ package.json
