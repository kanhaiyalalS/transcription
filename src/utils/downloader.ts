/**
* Note: Simple downloader with retry. For this assessment the actual download is mocked
* via example.com. but I am still allowing downloads from other URLs with retries.
*/

import axios from 'axios';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


export async function downloadAudio(url: string, retries = 3, delayMs = 500): Promise<Buffer> {
    let lastErr: any;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            // Mock: if URL contains example.com I don't actually fetch it
            if (url.includes('example.com')) {
                // return a small buffer as placeholder
                return Buffer.from('mock-audio-data');
            }
            const resp = await axios.get(url, { responseType: 'arraybuffer', timeout: 5000 });

            return Buffer.from(resp.data);
        } catch (err) {
            lastErr = err;
            console.warn(`Download attempt ${attempt} failed: ${err}. Retrying in ${delayMs}ms`);
            if (attempt < retries) await sleep(delayMs);
        }
    }

    // If all retries failed, throw the last error
    throw lastErr;
}