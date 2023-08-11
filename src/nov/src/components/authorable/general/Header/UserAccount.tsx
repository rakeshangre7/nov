import Button from '@/components/helpers/Button/Button';
import clsx from 'clsx';
import { Field, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

export type UserAccountProps = {
  isMobile?: boolean;
  portalHeader?: Field<string>;
  portalDescription?: Field<string>;
  portalRegisterUrl?: LinkField;
  portalLoginUrl?: LinkField;
};
const UserAccount = ({
  isMobile,
  portalHeader,
  portalDescription,
  portalRegisterUrl,
  portalLoginUrl,
}: UserAccountProps) => {
  return (
    <div
      className={clsx('h-[228px] z-10 w-full items-center bg-white flex flex-col justify-between', {
        'border-t	border-gray': isMobile,
      })}
    >
      <div>
        {portalHeader && (
          <Text
            tag={'p'}
            className="body1 !leading-[24px] text-black !font-bold max-w-[160px] mx-auto mt-[23px] text-center"
            field={portalHeader}
          />
        )}
        {portalDescription && (
          <Text
            tag={'p'}
            className="text-xs font-primary leading-[16px] text-gray-dark font-normal max-w-[190px] mx-auto mt-[22px] text-center"
            field={portalDescription}
          />
        )}
        {portalRegisterUrl && (
          <Button
            variant="tertiary"
            className="mx-auto leading-normal font-medium text-lightBlack mt-[15px] text-sm"
            iconPosition="right"
            iconClassName="icon-chevron-right"
            field={portalRegisterUrl}
          />
        )}
      </div>
      {portalLoginUrl && (
        <Button
          variant="button"
          auto={false}
          className="text-sm [&_span]:mt-[-3px]"
          field={portalLoginUrl}
        />
      )}
    </div>
  );
};

export default UserAccount;
