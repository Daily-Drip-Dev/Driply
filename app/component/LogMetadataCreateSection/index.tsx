import { useCoffeeLogForm } from 'src/store/useCoffeeLogForm';
import ImageInputSection from '../ImageInputSecton';
import Input from '../Input';
import TextArea from '../TextArea';
import styles from './styles.css';
import { ChangeEvent } from 'react';

export default function LogMetadataCreateSection() {
  const { title, description, setTitle, setDescription } = useCoffeeLogForm();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <section aria-labelledby="Log Create Form. MetaData Section" className={styles.container}>
      <ImageInputSection />
      {/* TODO: CafeSearch 라우트로 이동 필요 */}
      <Input value={title} onChange={handleTitleChange} placeholder="제목을 작성하세요." maxLength={30} showCounter />
      <TextArea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="문구를 작성하세요."
        maxLength={200}
        showCounter
      />
    </section>
  );
}
