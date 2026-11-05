/* global document, window */
/* Tiny loading-only toy. Runs independently of the engine bundle; never writes progress. */
(() => {
    const root = document.getElementById('cube-loading');
    if (!root) return;
    const target = root.querySelector('.loading-target');
    const enemy = root.querySelector('.loading-enemy');
    const tower = root.querySelector('.loading-tower');
    const arrow = root.querySelector('.loading-arrow');
    const spark = root.querySelector('.loading-spark');
    const score = root.querySelector('.loading-score b');
    const texts = {
        zh: ['点击小怪热身', '命中', '正在加载资源…', '把防御塔放在道路转角，覆盖更多敌人。'],
        en: ['Tap the cubeling!', 'HITS', 'Loading resources…', 'Place towers at corners to cover more of the path.'],
        fr: [
            'Touche le petit cube !',
            'TOUCHES',
            'Chargement…',
            'Place les tours dans les virages pour couvrir le chemin.'
        ],
        de: ['Tippe auf den Würfel!', 'TREFFER', 'Ressourcen laden…', 'Türme an Kurven decken mehr vom Weg ab.'],
        es: [
            '¡Toca al cubito!',
            'ACIERTOS',
            'Cargando recursos…',
            'Coloca torres en las curvas para cubrir más camino.'
        ],
        it: ['Tocca il cubetto!', 'COLPI', 'Caricamento…', 'Posiziona le torri nelle curve per coprire più strada.'],
        tr: [
            'Küpçüğe dokun!',
            'İSABET',
            'Kaynaklar yükleniyor…',
            'Yolun daha fazlasını kapsamak için kuleleri virajlara koy.'
        ],
        pt: [
            'Toque no cubinho!',
            'ACERTOS',
            'Carregando recursos…',
            'Coloque torres nas curvas para cobrir mais do caminho.'
        ]
    };
    let saved;
    try {
        saved = localStorage.getItem('cube/language');
    } catch {
        /* Embedded storage may be blocked. */
    }
    const language =
        [saved]
            .filter(Boolean)
            .map((value) => value.toLowerCase().split('-')[0])
            .find((value) => texts[value]) || 'en';
    const text = texts[language];
    root.lang = language;
    target.setAttribute('aria-label', text[0]);
    root.querySelector('.loading-invite').textContent = text[0];
    root.querySelector('.loading-score span').textContent = text[1];
    root.querySelector('.loading-status strong').textContent = text[2];
    root.querySelector('progress').setAttribute('aria-label', text[2]);
    root.querySelector('.loading-status small').textContent = text[3];
    const animations = new Set();
    let hits = 0;
    const animate = (element, frames, duration, delay = 0) => {
        if (!element.animate) return;
        const animation = element.animate(frames, { duration, delay, easing: 'cubic-bezier(.2,.8,.3,1)' });
        animations.add(animation);
        animation.finished.then(
            () => animations.delete(animation),
            () => animations.delete(animation)
        );
    };
    const hit = () => {
        score.textContent = String(++hits);
        for (const animation of animations) animation.cancel();
        animations.clear();
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
        // Measure the current responsive composition: a fixed 24px fall misses on phones.
        const stageRect = root.querySelector('.loading-stage').getBoundingClientRect();
        const towerRect = tower.getBoundingClientRect();
        const enemyRect = enemy.getBoundingClientRect();
        const fromX = towerRect.left + towerRect.width * 0.78 - stageRect.left;
        const fromY = towerRect.top + towerRect.height * 0.25 - stageRect.top;
        const toX = enemyRect.left + enemyRect.width * 0.42 - stageRect.left;
        const toY = enemyRect.top + enemyRect.height * 0.5 - stageRect.top;
        const distance = Math.hypot(toX - fromX, toY - fromY);
        const angle = Math.atan2(toY - fromY, toX - fromX);
        const length = Math.max(12, distance * 0.22);
        Object.assign(arrow.style, {
            left: `${fromX}px`,
            top: `${fromY}px`,
            width: `${length}px`,
            transformOrigin: '0 50%'
        });
        Object.assign(spark.style, { left: `${toX}px`, top: `${toY - 14}px` });
        animate(
            tower,
            [
                { transform: 'translateX(0)' },
                { transform: 'translateX(-12px) rotate(-5deg)', offset: 0.12 },
                { transform: 'translateX(0)' }
            ],
            380
        );
        animate(
            arrow,
            [
                { opacity: 1, transform: `rotate(${angle}rad) translateX(0)` },
                { opacity: 1, transform: `rotate(${angle}rad) translateX(${Math.max(0, distance - length - 7)}px)` }
            ],
            160
        );
        animate(
            enemy,
            [
                { transform: 'scale(1)' },
                { transform: 'scale(1.22,.75) rotate(8deg)', offset: 0.14 },
                { transform: 'translateY(-24px) scale(.9,1.1) rotate(-8deg)', offset: 0.48 },
                { transform: 'scale(1)' }
            ],
            520,
            110
        );
        animate(
            spark,
            [
                { opacity: 0, transform: 'scale(.4)' },
                { opacity: 1, transform: 'scale(1.8)', offset: 0.2 },
                { opacity: 0, transform: 'translateY(-42px) rotate(70deg) scale(.6)' }
            ],
            520,
            110
        );
    };
    target.addEventListener('click', hit);
    document.addEventListener(
        'cube-loading-ready',
        () => {
            target.removeEventListener('click', hit);
            for (const animation of animations) animation.cancel();
            animations.clear();
        },
        { once: true }
    );
})();
