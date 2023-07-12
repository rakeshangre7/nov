import { ComponentRendering, Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
/**
 * Props for the Section component.
 */
export type SectionProps = {
  uid: string;
  componentName: string;
  dataSource: string;
  rendering: ComponentRendering;
  params: { [key: string]: string };
  placeholders: { [key: string]: ComponentRendering[] };
}; /**
   * Section component represents a section on a page.
   *
   * 
  @Param
   {SectionProps} props - The component props.
   * @returns {JSX.Element} The rendered component.
   */
const HeroTest = (props: SectionProps): JSX.Element => {
  const { params, rendering } = props;
  // Fail out if params aren't present
  if (!params) {
    return <></>;
  }
  return (
    <section>
      <Placeholder name="hero-slide" rendering={rendering} />
    </section>
  );
};
export default HeroTest;
