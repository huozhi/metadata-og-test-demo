import { ImageResponse } from '@vercel/og'

export const alt = 'Twitter Image'

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 128,
          color: 'white',
          background: 'orange',
        }}
      >
        Twitter Image
      </div>
    )
  )
}
