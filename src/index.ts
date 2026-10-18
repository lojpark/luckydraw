import './localization';
import { reportCommunityMapPlay } from './communityMaps';
import { initMapSelector } from './mapSelector';
import options from './options';
import { Roulette } from './roulette';

const roulette = new Roulette();

const isLocalhost = ['localhost', '127.0.0.1'].includes(location.hostname);

(window as any).roulette = roulette;
// 맵 공유마당 API
const mapApiBase = isLocalhost ? 'http://localhost:3000' : 'https://marblerouletteshop.com';

// index.html 이 초기화할 때 부른다
(window as any).initMapSelector = (onMapChange: () => void, toast: (key: string) => void) =>
  initMapSelector({ roulette, apiBase: mapApiBase, onMapChange, toast });

// 시작 버튼. 받은 맵이면 플레이 1회를 알린다
(window as any).reportMapPlay = () => reportCommunityMapPlay(mapApiBase, roulette.getCurrentMap()?.id ?? '');
(window as any).options = options;
