import Π = require('./engine/config/client');
import { join as Ω } from 'path';
import { readdir as Γ } from 'fs/promises';
Π.load('commands'); Π.load('buttons');
(async dir => (await Γ(Ω(__dirname, dir)))
  .filter(file => file.endsWith('.js'))
  .forEach(async Φ => {
    const δ = await import(Ω(__dirname, `${dir}/${Φ}`));
    Π[δ.once ? 'once' : 'on'](
      δ.name, (...Σ) => δ.execute(...Σ)
    );
  }))('/engine/events/');
Π.start('SOFTundWET');
