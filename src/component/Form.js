import React, { useState, useRef, useMemo } from "react";

function Form(props) {
  //
  const { formType } = props;
  const initialFormValues = {
    fullName: "",
    email: "jg",
    password: "",
    confirmPassword: "",
    country: "",
    gender: "",
    languages: [],
  };

  const bigFunction = (strin) => {
    for (let i = 0; i < 200000000; i++) {
      for (let i = 0; i < 3; i++) {}
    }
    return strin;
  };
  const [form, setFormValues] = useState(initialFormValues);
  //   const withoutMemo = bigFunction(form.fullName);
  const fristMemo = useMemo(() => bigFunction(form.fullName), [form.fullName]);
  const confirmPasswordRef = useRef(null);
  console.log(confirmPasswordRef.current);

  const [showPassword, setShowPassword] = useState(false);

  const { fullName, email, password, gender, country, languages } = form;

  //   useEffect(() => {
  //     randomRef.current = showPassword;
  //   });

  /**
   * SP = 2 and RF = 0:: (SP + 2) => SP=4 and RC = 4
   * (SP + 2) => SP = 6 and RC = 6
   */
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    if (Array.isArray(form[name])) {
      //
      let arr = [...form[name]];
      console.log(form.languages.indexOf("PHP"));
      if (!ev.target.checked) {
        arr = arr.filter((ele) => ele !== value);
      } else {
        arr.push(value);
      }

      setFormValues((prevValues) => {
        return { ...prevValues, [name]: arr };
      });
    } else {
      setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const handlePasswordToText = (_) => {
    setShowPassword((prev) => !prev);
  };

  const handleChangeRef = () => {
    confirmPasswordRef.current.focus();

    // confirmPasswordRef.current.style.background = "#222272";
    confirmPasswordRef.current.value = "123456";
  };

  return (
    <div className="wrapper">
      <h1>Create Account</h1>
      <form>
        <div className="container">
          <div className="form-control">
            <input
              onChange={handleChange}
              className="form-input"
              name="fullName"
              type={"text"}
              placeholder={"Full Name"}
              value={fullName}
            />
          </div>

          <div className="form-control">
            <input
              onChange={handleChange}
              className="form-input"
              type={"email"}
              name={"email"}
              placeholder={"Email"}
              value={email}
              required
            />
          </div>
          <div className="form-control">
            <input
              onChange={handleChange}
              className="form-input"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder={"Password"}
              value={password}
            />
            <span onClick={handlePasswordToText} className="icon">
              (:)
            </span>
          </div>
          <div className="form-control">
            <input
              ref={confirmPasswordRef}
              onChange={handleChange}
              className="form-input"
              type={"password"}
              name={"confirmPassword"}
              placeholder={"Confirm Password"}
            />
          </div>
          <div>
            <select name="country" onChange={handleChange}>
              <option selected disabled>
                Country
              </option>
              <option>Nigeria</option>
              <option>Namibia</option>
              <option>Germany</option>
              <option>burundi</option>
            </select>
          </div>

          <div>
            <label htmlFor="male">Male</label>
            <input
              type={"radio"}
              name={"gender"}
              id={"male"}
              value={"male"}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="female">Female</label>

            <input
              type={"radio"}
              name={"gender"}
              id={"female"}
              value={"female"}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="JavaScript">JavaScript</label>
            <input
              onChange={handleChange}
              className="form-input"
              id="JavaScript"
              type={"checkbox"}
              name={"languages"}
              value={"JavaScript"}
              checked={form.languages.indexOf("JavaScript") !== -1}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Phython">Phython</label>

            <input
              onChange={handleChange}
              className="form-input"
              type={"checkbox"}
              id="Phython"
              name={"languages"}
              value={"Phython"}
              checked={form.languages.indexOf("Phython") !== -1}
            />
          </div>
          <div className="form-control">
            <label htmlFor="C+">C+</label>

            <input
              onChange={handleChange}
              className="form-input"
              id="C+"
              type={"checkbox"}
              name={"languages"}
              value={"C+"}
              checked={form.languages.indexOf("C+") !== -1}
            />
          </div>
          <div className="form-control">
            <label htmlFor="PHP">PHP</label>

            <input
              onChange={handleChange}
              className="form-input"
              id="PHP"
              type={"checkbox"}
              name={"languages"}
              value={"PHP"}
              checked={form.languages.includes("PHP")}
            />
          </div>
        </div>

        <button>{!!formType ? formType : "click"}</button>
      </form>
      {/*  */}
      <div style={{ marginTop: 10, display: "flex", justifyContent: "center" }}>
        <button style={{ padding: 5 }} onClick={handleChangeRef}>
          Change ref value
        </button>
      </div>

      {/* <p>Your full name is {fullName}</p>
      <p>Your gender is {gender}</p>
      <p>Your Country is {country}</p>
      <p>
        {`Your language(s) are/is `}
        {languages.length > 0 && languages.join()}
      </p>
      {/* <p>I code {randomRef.current} times daily</p> *
      <p>showPassword value {showPassword}</p>
      <p>confirm password value {form.confirmPassword}</p>
 */}
      <p>our memo {fristMemo}</p>
    </div>
  );
}

export default Form;
