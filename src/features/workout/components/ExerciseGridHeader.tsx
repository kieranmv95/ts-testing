import { ExerciseFormType } from '@/types/Exercise';

type ExerciseGridHeaderProps = {
  formType: ExerciseFormType;
  description?: string;
};

const SharedHeaders = ({
  children,
  className,
  description,
}: {
  children: React.ReactElement;
  className: string;
  description?: string;
}) => (
  <>
    {description && <div>{description}</div>}
    <div className={`grid gap-2 text-center ${className} mt-1`}>
      <div>Set</div>
      {children}
      <div>RPE</div>
    </div>
  </>
);

export const ExerciseGridHeader = ({
  formType,
  description,
}: ExerciseGridHeaderProps) => {
  switch (formType) {
    case 'weightReps':
      return (
        <SharedHeaders
          className="grid-cols-[24px_1fr_68px_52px_36px]"
          description={description}
        >
          <div>Weight (kg)</div>
          <div>Reps</div>
        </SharedHeaders>
      );
    case 'time':
      return (
        <SharedHeaders
          className="grid-cols-[24px_1fr_52px_36px]"
          description={description}
        >
          <div>Time (s)</div>
        </SharedHeaders>
      );
    case 'reps':
      return (
        <SharedHeaders
          className="grid-cols-[24px_1fr_52px_36px]"
          description={description}
        >
          <div>Reps</div>
        </SharedHeaders>
      );
    case 'bodyWeight':
      return (
        <SharedHeaders
          className="grid-cols-[24px_1fr_68px_52px_36px]"
          description={description}
        >
          <div>+Weight</div>
          <div>Reps</div>
        </SharedHeaders>
      );
    default:
      return <></>;
  }
};
