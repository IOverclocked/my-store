import { useState } from 'react';

const defaultValues = {
  name: '',
  price: '',
  media: '',
  description: '',
};

const Create = () => {
  const [values, setValues] = useState(defaultValues);
  const { name, price, media, description } = values;
  const [isValidate, setIsValidate] = useState(false);

  const setValidateClass = (key) => {
    if (isValidate && !values[key]) {
      return 'invalid'
    }

    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValidate(true);
    console.log(values);
    console.log(validateValues());
  };

  const validateValues = () => {
    return Object.values(values).every(value => value);
  }

  const handleChange = (e, isFile) => {
    if (isFile) {
      const { files } = e.target;
      setValues((prev) => ({ ...prev, media: files[0] }));
    } else {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form className="container" onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <div className="input-field col s7">
          <input
            className={`validate ${setValidateClass('name')}`}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="input-field col s5">
          <input
            className={`validate ${setValidateClass('price')}`}
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea
            name="description"
            className={`materialize-textarea validate ${setValidateClass('description')}`}
            placeholder="Description"
            style={{ height: '0px', Client: null }}
            value={description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="file-field input-field col s3">
          <div className="btn">
            <span>File</span>
            <input
              type="file"
              accept="image/*"
              files={media}
              onChange={(e) => handleChange(e, true)}
            />
          </div>
          <div className="file-path-wrapper">
            <input className={`file-path validate ${setValidateClass('description')}`} type="text" />
          </div>
        </div>
        <img
          className="col s9 responsive-img"
          src={media ? URL.createObjectURL(media) : ''}
        />
      </div>
      <div className="row">
        <div className="col">
          <button className="btn blue darken-1">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Create;
