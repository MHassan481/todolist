import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const FormikForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    skills: [""],
    address: {
      street: "",
      city: "",
    },
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    skills: Yup.array().of(Yup.string().required("Required")),
    address: Yup.object({
      street: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values, { resetForm }) => {
    const existingData = JSON.parse(localStorage.getItem("formDataList")) || [];
    const newData = [...existingData, values];

    localStorage.setItem("formDataList", JSON.stringify(newData));

    resetForm();
    navigate("/formikFormData");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Formik Form
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form className="space-y-5">
              {/* Name */}
              <div>
                <Field
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Street */}
              <div>
                <Field
                  name="address.street"
                  placeholder="Street"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="address.street"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* City */}
              <div>
                <Field
                  name="address.city"
                  placeholder="City"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="address.city"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Skills */}
              <div className="space-y-3">
                {values.skills.map((_, index) => (
                  <div key={index}>
                    <Field
                      name={`skills[${index}]`}
                      placeholder={`Skill ${index + 1}`}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name={`skills[${index}]`}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormikForm;
