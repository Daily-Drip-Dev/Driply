import ImageInputSection from '../ImageInputSecton';
import Input from '../Input';
import TextArea from '../TextArea';
import styles from './styles.css';

export default function LogMetadataCreateSection() {
  return (
    <section aria-labelledby="Log Create Form. MetaData Section" className={styles.container}>
      <ImageInputSection />
      {/* TODO: CafeSearch 라우트로 이동 필요 */}
      <Input placeholder="제목을 작성하세요." maxLength={15} showCounter />
      <TextArea placeholder="문구를 작성하세요." maxLength={200} showCounter />
    </section>
  );
}
