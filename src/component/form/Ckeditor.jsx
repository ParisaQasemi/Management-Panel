import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ErrorMessage, Field } from "formik";
import React from "react";
import FormikError from "./FormikError";

const Ckeditor = ({ name, label, firstItem }) => {
  return (
    <Field>
      {({form}) => {
        return (
          <div className="h-14 mb-12 text-gray-700 text-sm">
            <CKEditor
              editor={ClassicEditor}
              data={form.values[name] || `<p>${label}: ${firstItem}</p>`}
              onReady={(editor) => {
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                form.setFieldValue(name, data)
              }}
              onBlur={(event, editor) => {
                form.setFieldTouched(name)
              }}
              onFocus={(event, editor) =>
                editor.getData() == `<p>${label}: ${firstItem}</p>` ? editor.setData('') : null
              }
            />
            <ErrorMessage name={name} component={FormikError} />
          </div>
        );
      }}
    </Field>
  );
};

export default Ckeditor;
