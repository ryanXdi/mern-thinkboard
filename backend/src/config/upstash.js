import {Ratelimit} from '@upstash/ratelimit' // for deno: see above
import {Redis} from '@upstash/redis';

import dotenv from 'dotenv';

dotenv.config();

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, '60 s'), // 10 requests per 20 seconds
});

export default ratelimit;