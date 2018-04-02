import './polyfills';
import '../../public/stylesheets/style.scss'
import '../../public/stylesheets/indigo-pink.css'


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
