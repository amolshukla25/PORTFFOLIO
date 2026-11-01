# MySQL course — how it is built

Everything the learner sees on `/courses/mysql/*` is generated from data in `config/mysql/`.

| Path | What it is |
|---|---|
| `config/mysql/lessons/NN-*.ts` | One file per lesson: quick answer, outcomes, sections, mistakes, FAQ, guided example, 15–20 questions, quiz |
| `config/mysql/bank.ts` | The 36 original tasks + 135-problem bank (ids `Lx-O*`, `Lx-N*`) that lessons pick from |
| `config/mysql/results.generated.json` | Real MySQL 8 output for every example and answer (**generated**) |
| `config/mysql/syllabus.ts` | Small client-safe summary: titles, minutes, problem counts (**generated**) |
| `lib/sql-practice/` | Browser practice engine: sql.js + MySQL compatibility layer, result checker, Web Worker |
| `components/courses/mysql/` | Course page, lesson page (4-step stepper), practice panel, runner, diagrams, playground |
| `lib/mysql-course/seo.ts` | JSON-LD: Course, LearningResource, FAQPage, Dataset, BreadcrumbList |
| `public/downloads/mysql-retail-*.sql` | Small shop, reset script, large dataset (**large + reset generated**) |
| `public/vendor/sql.js/` | sql.js runtime served to the practice worker |

## After editing a lesson

```bash
npm run mysql:syllabus      # minutes, counts for course page / nav / sitemap
npm run mysql:results       # needs a local MySQL 8.0.16+ and: pip install mysql-connector-python
                            # MYSQL_USER / MYSQL_PASSWORD env vars, default root / empty
npm run test:mysql          # CI gate: 15–20 problems per lesson, every answer matches MySQL in the browser engine
```

`npm run mysql:downloads` rewrites the reset and large-dataset scripts from `lib/sql-practice/datasets.ts`.
`npm run mysql:vendor` copies sql.js from node_modules into `public/vendor/sql.js/` after upgrading it.

## Practice engine limits

Runs in a Web Worker; 3 s limit (8 s on the large dataset), 500 rows returned, one database per dataset per tab, reset button.
Blocked: GRANT/REVOKE, LOAD DATA, INTO OUTFILE, SET GLOBAL, user management, stored programs, CREATE/DROP DATABASE.
Differs from MySQL: EXPLAIN columns, WITH ROLLUP, user variables, `date + INTERVAL` (use DATE_ADD), ONLY_FULL_GROUP_BY is not enforced.
