import { Router } from 'express';
import { getExamples } from '../controllers/example/example';

const router = Router();

router.get('/examples', getExamples)