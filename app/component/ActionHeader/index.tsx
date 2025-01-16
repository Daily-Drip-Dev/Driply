/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren } from 'react';
import styles from './styles.css';
import { MdOutlineChevronLeft } from 'react-icons/md';

const CENTER_CONTENT_NAME = 'CenterContent';
const RIGHT_CONTENT_NAME = 'RightContent';

interface ActionHeaderProps {
  onBack?: () => void;
  children: React.ReactNode;
}

function ActionHeader({ onBack, children }: ActionHeaderProps) {
  const centerContent = React.Children.toArray(children).find(
    (child: any) => child?.type?.displayName === CENTER_CONTENT_NAME
  );

  const rightContent = React.Children.toArray(children).find(
    (child: any) => child?.type?.displayName === RIGHT_CONTENT_NAME
  );

  return (
    <header className={styles.container}>
      <button className={styles.leftButton} onClick={onBack}>
        <MdOutlineChevronLeft className={styles.leftChevron} />
      </button>
      <div className={styles.centerContent}>{centerContent}</div>
      <div className={styles.rightContent}>{rightContent}</div>
    </header>
  );
}

function CenterContent({ children }: PropsWithChildren) {
  return <>{children}</>;
}
CenterContent.displayName = CENTER_CONTENT_NAME;

function RightContent({ children }: PropsWithChildren) {
  return <>{children}</>;
}
RightContent.displayName = RIGHT_CONTENT_NAME;

ActionHeader.CenterContent = CenterContent;
ActionHeader.RightContent = RightContent;

export default ActionHeader;
