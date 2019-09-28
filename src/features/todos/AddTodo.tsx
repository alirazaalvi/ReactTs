import * as React from 'react';
//import { Formik, FormikActions, FormikProps, Form, Field, FieldProps } from 'formik';
import { InjectedFormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../controls/Input';
import Button from '../../controls/Button';
import { Todo } from '../../features/todos/types';

interface FormProps {
  handleAddTodo(todo: Todo): void;
}
interface FormValues {
  title: string;
}

const InnerForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = (
  props,
) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label className="label">Title</label>
      <div className="columns is-multiline is-gapless">
        <div className="column is-three-quarters">
          <div className="field">
            <div className="control">
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.title}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-quarters">
          <Button
            label="Add"
            type="submit"
            className="button is-info"
            disabled={props.isSubmitting}
          />
        </div>
        <div className="column is-half">
          {props.touched.title && props.errors.title &&
          <span className="has-text-danger">{props.errors.title}</span>}
        </div>
      </div>
    </div>
  </form>
);

const AddTodo = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ title: '' }),
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .min(2, 'Please input 2 characters or less')
      .required('Please input title'),
    },
  ),
  handleSubmit: (values, bag) => {
    const todo: Todo = { name: values.title, lastModified: '01-01-2019' };
    bag.props.handleAddTodo(todo);
    bag.setSubmitting(false);
    bag.resetForm();
  },
})(InnerForm);

export default AddTodo;







// import * as React from 'react';
// //import { Formik, FormikActions, FormikProps, Form, Field, FieldProps } from 'formik';
// import { InjectedFormikProps, withFormik } from 'formik';
// import * as Yup from 'yup';
// //import Button from '../../controls/Button';
// import Input from '../../controls/Input';
// import { Todo } from '../../features/todos/types';

// interface FormProps {
//   handleAddTodo(todo: Todo): void;
// }
// interface FormValues {
//   title: string;
// }

// const InnerForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = (
//   props,
// ) => (
//   <form onSubmit={props.handleSubmit}>
//   <label className="label">Name</label>
//     <Input
//       id="title"
//       name="title"
//       type="text"
//       placeholder="Title"
//       onChange={props.handleChange}
//       value={props.values.title}
//     />

//     {props.touched.title && props.errors.title &&
//     <div>{props.errors.title}{props.isSubmitting}</div>}
//     <br />
//     <button
//       type="submit"
//       disabled={props.isSubmitting}
//     >
//       Submit
//     </button>
//     <br />
//     <br />
//   </form>
// );

// const AddTodo = withFormik<FormProps, FormValues>({
//   mapPropsToValues: () => ({ title: '' }),
//   validationSchema: Yup.object().shape({
//     title: Yup.string()
//       .min(2, 'Please input 2 characters or less')
//       .required('Please input title'),
//     },
//   ),
//   handleSubmit: (values, bag) => {
//     const todo: Todo = { name: values.title, lastModified: '01-01-2019' };
//     bag.props.handleAddTodo(todo);
//     bag.setSubmitting(false);
//   },
// })(InnerForm);

// export default AddTodo;



