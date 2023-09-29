import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CharacterFormSchema } from '../validations/character';
import Button from './Button';
import Card from './Card';
import InputBox from './InputBox';
import type { HeroModel } from '../features/heroes/hero';
import type { CharacterFormSchemaType } from '../validations/character';
import type { SubmitHandler } from 'react-hook-form';

type Props = {
  handleMutate: (values: any) => any;
};

const FormSubmission = ({ handleMutate }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm<CharacterFormSchemaType>({
    mode: 'all',
    resolver: zodResolver(CharacterFormSchema),
  });

  const onSubmit: SubmitHandler<CharacterFormSchemaType> = data => {
    handleMutate(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={'flex flex-col items-center justify-center'}>
        <Card>
          {/*
          <div className={'mb-5 flex flex-col'}>
            <label htmlFor={'firstName'}>First Name</label>
            <input
              className={'mr-4 border-0 border-b bg-white pt-2 pb-2 pr-0 pl-0 text-base text-gray-900 outline-none'}
              id={'firstName'}
              {...register('firstName')}
            />
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={e => (
                <pre className="text-xs text-red-500">{e.message}</pre>
              )}
            />
          </div>
          */}
          <InputBox label="first name" errors={errors} name="firstName" register={register} />
          <InputBox label="last name" errors={errors} name="lastName" register={register} />
          <InputBox label="house" errors={errors} name="house" register={register} />
          <InputBox label="known as" errors={errors} name="knownAs" register={register} />
          <Button disabled={!isValid} type="submit" color="primary">
            {isSubmitting ? 'submitting..' : 'Save Character'}
          </Button>
        </Card>
      </div>
    </form>
  );
};

export default FormSubmission;
