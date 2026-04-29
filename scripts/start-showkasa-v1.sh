#!/bin/zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
cd /Users/dexter/.openclaw/workspace/showkasa-v1
exec /bin/zsh -lc '/opt/homebrew/bin/npm run build && /opt/homebrew/bin/npm run preview:compare'
