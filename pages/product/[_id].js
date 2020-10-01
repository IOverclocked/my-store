import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import baseUrl from 'helpers/baseUrl';

const Product = ({ product }) => {
  const router = useRouter();
  const { _id, name, price, description, mediaUrl } = product;
  const [resMsg, setResMsg] = useState('');
  const [deleteModal, setDeleteModal] = useState(null);
  const [infoModal, setInfoModal] = useState(null);
  const deleteModalRef = useRef(null);
  const infoModalRef = useRef(null);

  useEffect(() => {
    setDeleteModal(M.Modal.init(deleteModalRef.current));
    setInfoModal(M.Modal.init(infoModalRef.current));
  }, [deleteModalRef, infoModalRef]);

  const getDeleteModal = () => {
    return (
      <div id="deleteModal" className="modal" ref={deleteModalRef}>
        <div className="modal-content">
          <h4>{name}</h4>
          <p>Are you sure you want to delete this</p>
        </div>
        <div className="modal-footer">
          <button className="btn blue darken-1" onClick={() => deleteModal.close()}>
            Cancel
          </button>
          &nbsp;
          <button className="btn red darken-1" onClick={deleteProduct}>
            Yes
          </button>
        </div>
      </div>
    );
  };

  const getInfoModal = () => {
    return (
      <div id="infoModal" className="modal" ref={infoModalRef}>
        <div className="modal-content">
          <h4>{name}</h4>
          <p>{resMsg}</p>
        </div>
        <div className="modal-footer">
          <button className="btn blue darken-1" onClick={() => {
            infoModal.close();
            router.push('/');
          }}>
            Close
          </button>
        </div>
      </div>
    );
  }

  const deleteProduct = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/product/${_id}`, {
        method: 'DELETE'
      });
      const { message } = await res.json();
      setResMsg(message);
    } catch (err) {
      console.log(err);
      setResMsg('Sorry, now we not can do this. Try to later.');
    }

    deleteModal.close();
    infoModal.open();
  }

  return (
    <div className="container center-align">
      <h3>{name}</h3>
      <img src={mediaUrl} style={{ width: '30%' }} />
      <h5>Price: {price}$</h5>
      <input
        type="number"
        style={{ width: '400px', margin: '10px' }}
        min="1"
        placeholder="Quantity"
      />
      <button className="btn blue darken-1">
        Add
        <i className="material-icons right">add</i>
      </button>

      <p className="center-align">{description}</p>

      <button data-target="deleteModal" className="btn red darken-1" onClick={() => deleteModal.open()}>
        Delete
        <i className="material-icons left">delete</i>
      </button>
      
      {getDeleteModal()}
      {getInfoModal()}
    </div>
  );
};

export async function getStaticProps(context) {
  const {
    params: { _id },
  } = context;
  const res = await fetch(`${baseUrl}/api/product/${_id}`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${baseUrl}/api/products`);
  const products = await res.json();
  const paths = products.map(({ _id }) => ({
    params: { _id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Product;
