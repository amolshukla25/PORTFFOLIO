/**
 * Client-safe description of every practice database.
 *
 * Kept apart from datasets.ts so the browser bundle gets the labels without
 * the row generators. `label` is what the code arena shows next to a problem,
 * which is how a learner knows the database is already selected.
 */

import type { DatasetId } from "./datasets";

export interface DatasetInfo {
  /** Full name shown in the practice header. */
  label: string;
  /** Short name for compact badges and download links. */
  short: string;
  /** MySQL schema created by the downloadable script. */
  schema: string;
  /** What one row of the busiest table means. */
  grain: string;
}

export const DATASET_INFO: Record<DatasetId, DatasetInfo> = {
  shop: { label: "Learning Shop (small)", short: "Shop", schema: "portfolio_retail_lab", grain: "one order line" },
  large: { label: "Learning Shop (large, 4,000 orders)", short: "Large shop", schema: "portfolio_retail_large", grain: "one order line" },
  none: { label: "No database needed", short: "No database", schema: "-", grain: "-" },
  hospital: { label: "City Hospital (2,000 appointments)", short: "Hospital", schema: "portfolio_hospital", grain: "one appointment" },
  bank: { label: "Retail Bank (2,000 transactions)", short: "Bank", schema: "portfolio_bank", grain: "one transaction" },
  ecommerce: { label: "Marketplace (2,000 orders)", short: "Marketplace", schema: "portfolio_ecommerce", grain: "one order line" },
  college: { label: "City College (2,000 exam results)", short: "College", schema: "portfolio_college", grain: "one exam result" },
  rides: { label: "City Rides (2,000 trips)", short: "Rides", schema: "portfolio_rides", grain: "one trip" },
  streaming: { label: "Streaming Service (2,000 watch sessions)", short: "Streaming", schema: "portfolio_streaming", grain: "one watch session" },
};

export const datasetLabel = (id: DatasetId) => DATASET_INFO[id]?.label ?? id;
