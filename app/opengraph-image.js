import fs from 'fs'
import path from 'path'
import { ImageResponse } from 'next/server';
import { fileURLToPath } from 'url';

const font = fs.promises.readFile(path.join(fileURLToPath(import.meta.url), '../../public/Inter-Regular.woff'))

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          fontSize: 100,
          fontFamily: '"Inter"',
          paddingTop: '100px',
          paddingLeft: '50px',
        }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await font,
        },
      ],
    }
  );
}

export const size = {
    width: 1200,
    height: 630
}
