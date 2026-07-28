import { existsSync, readdirSync, statSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'

/** Cloudflare Workers/Pages asset limit is 25 MiB — strip anything at or above 24 MiB. */
const MAX_BYTES = 24 * 1024 * 1024

function stripDir(dir) {
  if (!existsSync(dir)) return

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)

    if (entry.isDirectory()) {
      stripDir(path)
      continue
    }

    const size = statSync(path).size
    const isBlockedVideo = entry.name.endsWith('.mp4')
    const isOversized = size >= MAX_BYTES

    if (isBlockedVideo || isOversized) {
      unlinkSync(path)
      console.log(`Removed deploy asset (${(size / 1024 / 1024).toFixed(1)} MiB): ${path}`)
    }
  }
}

for (const dir of ['public', 'dist']) {
  stripDir(dir)
}

console.log('Deploy assets trimmed for Cloudflare (25 MiB limit)')
