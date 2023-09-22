import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { Project } from '.generated/templates/Project.Item.model';
import StatsBlockItems from './StatsBlockItems';

export interface StatsBlock extends Project.Item.NovCom.Modules.Fields.StatBlock {
  params?: {
    alignment?: string;
  };
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

const StatsBlock = ({ fields }: StatsBlockProps) => {
  // const [animatedNumber1, setAnimatedNumber1] = useState<number | string>(0);
  // const [animatedNumber2, setAnimatedNumber2] = useState<number | string>(0);
  // const [animatedNumber3, setAnimatedNumber3] = useState<number | string>(0);

  // const statsBlockRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const startCountAnimation = (endNbr: number, setAnimatedValue: (value: number) => void) => {
  //     let currentNumber = 0;
  //     const animationDuration = 50; // Adjust the animation duration as needed
  //     const step = (endNbr - currentNumber) / animationDuration;

  //     const animationInterval = setInterval(() => {
  //       currentNumber += step;
  //       currentNumber = Math.min(currentNumber, endNbr);
  //       setAnimatedValue(Math.floor(currentNumber));

  //       if (currentNumber >= endNbr) {
  //         clearInterval(animationInterval);
  //       }
  //     }, 16);
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         if (fields.statNumber1 && animatedNumber1 === 0) {
  //           const statNumber1Value = fields.statNumber1.value || 0;
  //           const endNbr1 =
  //             typeof statNumber1Value === 'number'
  //               ? statNumber1Value
  //               : parseFloat(statNumber1Value) || 0;
  //           startCountAnimation(endNbr1, setAnimatedNumber1);
  //         }

  //         if (fields.statNumber2 && animatedNumber2 === 0) {
  //           const statNumber2Value = fields.statNumber2.value || 0;
  //           const endNbr2 =
  //             typeof statNumber2Value === 'number'
  //               ? statNumber2Value
  //               : parseFloat(statNumber2Value) || 0;
  //           startCountAnimation(endNbr2, setAnimatedNumber2);
  //         }

  //         if (fields.statNumber3 && animatedNumber3 === 0) {
  //           const statNumber3Value = fields.statNumber3.value || 0;
  //           const endNbr3 =
  //             typeof statNumber3Value === 'number'
  //               ? statNumber3Value
  //               : parseFloat(statNumber3Value) || 0;
  //           startCountAnimation(endNbr3, setAnimatedNumber3);
  //         }
  //       }
  //     });
  //   });

  //   if (statsBlockRef.current) {
  //     observer.observe(statsBlockRef.current);
  //   }

  //   return () => {
  //     if (statsBlockRef.current) {
  //       observer.unobserve(statsBlockRef.current);
  //     }
  //   };
  // }, [fields, animatedNumber1, animatedNumber2, animatedNumber3]);

  return (
    <div className="">
      <div className="" data-component="authorable/general/statsblock" data-testid="statsblock">
        <div className="container m-auto">
          <div className="flex flex-col smd:flex smd:flex-row justify-between items-center  pt-[30px] smd:pt-20">
            <StatsBlockItems
              statNumber={fields.statNumber1?.value}
              suffix={fields?.suffix1?.value}
              statText={fields?.statText1?.value}
              statCTA={fields?.statCTA1}
            />
            <StatsBlockItems
              statNumber={fields.statNumber2?.value}
              suffix={fields?.suffix2?.value}
              statText={fields?.statText2?.value}
              statCTA={fields?.statCTA2}
            />
            <StatsBlockItems
              statNumber={fields.statNumber3?.value}
              suffix={fields?.suffix3?.value}
              statText={fields?.statText3?.value}
              statCTA={fields?.statCTA3}
            />
          </div>
        </div>
      </div>

      {/* <div
          className={clsx('w-full  m-auto', {
            'text-right': params?.alignment === 'right',
            'text-left': params?.alignment !== 'right',
          })}
          data-component="authorable/general/statsblock"
          data-testid="statsblock"
          ref={statsBlockRef}
        >
          <div className="flex flex-col smd:flex smd:flex-row justify-between items-center  pt-[30px] smd:pt-20">
            <div className="mb-[30px] smd:mb-0  text-center flex-1 w-full">
              <Text
                tag="span"
                field={{
                  value: fields?.suffix1?.value
                    ? `${fields?.statNumber1?.value} ${fields?.suffix1?.value}`
                    : animatedNumber1.toLocaleString(),
                }}
                className="text-black text-[72px] smd:text-[88px] font-bold font-primary leading-[0.72] smd:leading-[0.82]"
              />

              <Text
                tag="p"
                field={fields?.statText1}
                className="text-dark text-sm font-primary leading-24 pt-20 text-center relative before:absolute before:content-[''] before:h-[2px] before:w-[30px] before:-mt-10 before:left-2/4 before:bg-red before:transform before:-translate-x-1/2"
              />
              {fields.statCTA1?.value.href && fields.statCTA1?.value.text && (
                <Button
                  field={fields?.statCTA1}
                  className="pt-[5px] mt-[11px]"
                  variant={'tertiary'}
                  iconPosition="right"
                  iconClassName="icon-chevron-right"
                ></Button>
              )}
            </div>
            <div className="mb-[30px] smd:mb-0 text-center flex-1 w-full">
              {fields?.statNumber2?.value && (
                <Text
                  tag="span"
                  field={{
                    value: fields?.suffix2?.value
                      ? `${fields?.statNumber2?.value} ${fields?.suffix2?.value}`
                      : typeof animatedNumber2 === 'number'
                      ? targetValue?.includes('+')
                        ? `${animatedNumber2.toLocaleString()}+`
                        : animatedNumber2.toLocaleString()
                      : '',
                  }}
                  className="text-black text-[72px] smd:text-[88px] font-bold font-primary leading-[0.72] smd:leading-[0.82]"
                />
              )}

              <Text
                tag="p"
                field={fields?.statText2}
                className="text-dark text-sm font-primary leading-24 pt-20 text-center relative before:absolute before:content-[''] before:h-[2px] before:w-[30px] before:-mt-10 before:left-2/4 before:bg-red before:transform before:-translate-x-1/2"
              />
              {fields?.statCTA2?.value.href && fields?.statCTA2.value.text && (
                <Button
                  field={fields?.statCTA2}
                  className="pt-[5px] mt-[11px]"
                  variant={'tertiary'}
                  iconPosition="right"
                  iconClassName="icon-chevron-right"
                ></Button>
              )}
            </div>
            <div className=" smd:mb-0 text-center flex-1 w-full">
              <Text
                tag="span"
                field={{
                  value: fields?.suffix3?.value
                    ? `${fields?.statNumber3?.value} ${fields?.suffix3?.value}`
                    : animatedNumber3.toLocaleString(),
                }}
                className="text-black text-[72px] smd:text-[88px] font-bold font-primary leading-[0.72] smd:leading-[0.82]"
              />
              <Text
                tag="p"
                field={fields?.statText3}
                className="text-dark text-sm font-primary leading-24 pt-20 text-center relative before:absolute before:content-[''] before:h-[2px] before:w-[30px] before:-mt-10 before:left-2/4 before:bg-red before:transform before:-translate-x-1/2"
              />
              {fields.statCTA3?.value.href && fields.statCTA3.value.text && (
                <Button
                  field={fields?.statCTA3}
                  className="pt-[5px] mt-[11px]"
                  variant={'tertiary'}
                  iconPosition="right"
                  iconClassName="icon-chevron-right"
                ></Button>
              )}
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default StatsBlock;
