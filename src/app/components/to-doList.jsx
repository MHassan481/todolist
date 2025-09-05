import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

const TodoList = () => {
  const initialValues = {
    task: "",
    todos: [],
  };

  const validationSchema = Yup.object({
    task: Yup.string().required("Task is required"),
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Formik To-Do List
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({
          values,
          errors,
          setFieldValue,
          setFieldError,
          setTouched,
          validateField,
        }) => (
          <Form className="space-y-4">
            <div className="flex gap-2">
              <Field
                name="task"
                placeholder="Enter a task"
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={async () => {
                  await setTouched({ task: true });
                  await validateField("task");

                  if (!errors.task) {
                    const newTodo = {
                      id: Date.now(),
                      task: values.task,
                      isEditing: false,
                    };
                    setFieldValue("todos", [...values.todos, newTodo]);
                    setFieldValue("task", "");
                    setFieldError("task", "");
                    setTouched({ task: false });
                  }
                }}
              >
                Add
              </button>
            </div>
            <ErrorMessage
              name="task"
              component="div"
              className="text-red-500 text-sm"
            />

            <FieldArray name="todos">
              {({ remove, replace }) => (
                <div>
                  <p className="text-2xl">{values.task}</p>
                  {values.todos.length === 0 ? (
                    <p className="text-gray-500 text-center mt-6">
                      No tasks yet.
                    </p>
                  ) : (
                    <ul className="mt-4 space-y-2">
                      {values.todos.map((todo, index) => (
                        <li
                          key={todo.id}
                          className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
                        >
                          {todo.isEditing ? (
                            <>
                              <input
                                type="text"
                                value={todo.task}
                                onChange={(e) => {
                                  const updatedTodo = {
                                    ...todo,
                                    task: e.target.value,
                                  };
                                  replace(index, updatedTodo);
                                }}
                                className="flex-1 mr-2 border px-2 py-1 rounded"
                              />
                              <button
                                type="button"
                                className="text-green-600 mr-2"
                                onClick={() => {
                                  if (todo.task.length === 0) {
                                    remove(index);
                                  } else {
                                    const updatedTodo = {
                                      ...todo,
                                      isEditing: false,
                                    };
                                    replace(index, updatedTodo);
                                  }
                                }}
                              >
                                ✅
                              </button>
                              <button
                                type="button"
                                className="text-yellow-600"
                                onClick={() => {
                                  const original = {
                                    ...todo,
                                    isEditing: false,
                                  };
                                  replace(index, original);
                                }}
                              >
                                ❌
                              </button>
                            </>
                          ) : (
                            <>
                              <span className="flex-1">{todo.task}</span>
                              <div className="flex items-center space-x-2">
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updatedTodo = {
                                      ...todo,
                                      isEditing: true,
                                    };
                                    replace(index, updatedTodo);
                                  }}
                                  className="text-blue-500 hover:text-blue-700"
                                >
                                  ✏️
                                </button>
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  ❌
                                </button>
                              </div>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {values.todos.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setFieldValue("todos", [])}
                      className="mt-4 w-full text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoList;
