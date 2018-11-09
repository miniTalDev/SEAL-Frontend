## SEAL-Frontend

**Start App with**
1. ``` yarn install ```
2. ``` yarn serve ``` for use develop mode
3. ``` yarn deploy-bluemix ``` for deploy to production

คำสั่งของ Develop Mode ระบบจะทำการนำ ``` .env.development ``` มาใช้งาน

คำสั่งของ Production ระบบจะทำการ Build Vue ออกมาเป็น static และ deploy ขึ้น ibm cloud เองอัตโนมัติทันที ซึ่งจะนำ ``` .env.production ``` มาใช้งาน
