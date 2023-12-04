import dbConnect from '@/backend/config/dbConnect'
import { getproduct, newproduct } from '@/backend/controllers/productControllers'
import { createRouter } from 'next-connect';

const router = createRouter();
console.log("1");
dbConnect();
console.log("2");
router.get(getproduct);
router.post(newproduct);
console.log("3");

export default router.handler();