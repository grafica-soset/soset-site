# soset-site

Site estático da Soset (Nuxt 4.5, `nuxt generate`), publicado no GitHub Pages a cada push na `main`
(`.github/workflows/deploy.yml`).

- Site: https://grafica-soset.github.io/soset-site/
- Logo (link direto, usado no logotipo do tenant Soset): https://grafica-soset.github.io/soset-site/logo-soset.png

Arquivos em `public/` saem na raiz do site com o mesmo nome.

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # site estático em .output/public
```
