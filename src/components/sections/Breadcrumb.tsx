import { Fragment } from "react";
import { Link } from "react-router-dom";

export interface Crumb {
  label: string;
  to?: string;
}

const Breadcrumb = ({ items }: { items: Crumb[] }) => (
  <div className="bg-[hsl(var(--steel))] px-6 py-2.5">
    <div className="mx-auto max-w-[1120px] text-[0.8rem] text-white/65">
      {items.map((c, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="px-1.5 text-white/40">›</span>}
          {c.to ? (
            <Link to={c.to} className="text-white/65 hover:text-accent transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className="text-accent">{c.label}</span>
          )}
        </Fragment>
      ))}
    </div>
  </div>
);

export default Breadcrumb;
