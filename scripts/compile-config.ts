import { compileConfigurations } from '../tests/testUtils'
import * as path from 'path'

compileConfigurations(
  path.join(__dirname, '..', 'configurations'),
  path.join(__dirname, '..', 'config-out'),
)
