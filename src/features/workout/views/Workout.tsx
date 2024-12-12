import { data } from '../data';
import { Header, Section } from '../components';

export const Workout = () => (
  <>
    <Header
      title={data.title}
      description={data.description}
      categories={data.categories}
    />

    <div className="grid gap-4">
      {data.sections.map((section) => (
        <Section key={section.title} section={section} />
      ))}
    </div>
  </>
);
