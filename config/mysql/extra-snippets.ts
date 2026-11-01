/** SQL shown outside lessons (course page) that also needs real MySQL output. */
export const HERO_SQL =
  "SELECT c.city,\n       SUM(i.quantity * i.unit_price) AS revenue\nFROM orders o\nJOIN customers c   ON c.customer_id = o.customer_id\nJOIN order_items i ON i.order_id = o.order_id\nWHERE o.status = 'completed'\nGROUP BY c.city\nORDER BY revenue DESC;";

export const EXTRA_SNIPPETS: { dataset: "shop"; sql: string; where: string }[] = [{ dataset: "shop", sql: HERO_SQL, where: "course:hero" }];
