import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import StatsBlockItems from './StatsBlockItems';

export interface StatsBlock {
  params?: string;
  suffix1?: Field<string>;
  suffix2?: Field<string>;
  suffix3?: Field<string>;
  statNumber1?: Field<string | number>;
  statNumber2?: Field<string | number>;
  statNumber3?: Field<string | number>;
  statText1?: Field<string>;
  statText2?: Field<string>;
  statText3?: Field<string>;
  statCTA1?: LinkField;
  statCTA2?: LinkField;
  statCTA3?: LinkField;
}

export type StatsBlockProps = {
  rendering: { componentName: string };
  params: { alignment?: string };
  fields: StatsBlock;
};

const StatsBlock = ({ fields, params }: StatsBlockProps) => {
  if (fields === null || fields === undefined) return <></>;
  return (
    <div
      className="pt-[30px] smd:pt-20"
      data-component="authorable/general/statsblock"
      data-testid="statsblock"
    >
      <div className="container m-auto">
        <div className="flex flex-col smd:flex smd:flex-row justify-between items-stretch">
          <StatsBlockItems
            statNumber={fields?.statNumber1?.value}
            suffix={fields?.suffix1?.value}
            statText={fields?.statText1?.value}
            statCTA={fields?.statCTA1}
            params={params?.alignment}
          />
          <StatsBlockItems
            statNumber={fields?.statNumber2?.value}
            suffix={fields?.suffix2?.value}
            statText={fields?.statText2?.value}
            statCTA={fields?.statCTA2}
            params={params?.alignment}
          />
          <StatsBlockItems
            statNumber={fields?.statNumber3?.value}
            suffix={fields?.suffix3?.value}
            statText={fields?.statText3?.value}
            statCTA={fields?.statCTA3}
            params={params?.alignment}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsBlock;
