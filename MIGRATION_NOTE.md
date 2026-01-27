Migration steps to move site text and constants into `assets/content.json`:

1. Add or update entries in `src/assets/content.json` for the new strings or constant data.
2. Use `ContentService` to access values:

   - Inject `ContentService` in your component: `constructor(private content: ContentService) {}`
   - Read a value once: `this.content.get('path.to.value').pipe(first()).subscribe(v => this.my = v);`
   - For arrays/objects, map to expected shape where necessary.

3. Prefer using keys like `home.slides` or `navbar.leftLinks` for structure.
4. If you need synchronous access at bootstrap, consider loading the JSON earlier and providing it via an APP_INITIALIZER.
5. Update templates to use component properties bound to content values.
6. For localization, replace `content.json` with per-locale files and load based on user preference.

Notes:
- `ContentService` uses `HttpClient`, ensure `HttpClientModule` is imported in the top-level component/module.
- Keep media paths relative to `assets/` to match current project layout.
