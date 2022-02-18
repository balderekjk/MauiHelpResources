import React from 'react';

function AccordionData(props) {
  return (
    <div>
      <div>
        {`${props.val.hours}` !== 'null' ? (
          <p>
            <strong>Hours:</strong> {props.val.hours}
          </p>
        ) : (
          ''
        )}
        {`${props.val.primary_phone}` !== 'null' ? (
          <p>
            <strong>Main Phone:</strong>{' '}
            <a href={`tel:${props.val.primary_phone}`}>
              {props.val.primary_phone}
            </a>
          </p>
        ) : (
          ''
        )}
        {`${props.val.additional_phones}` !== 'null' ? (
          <p>
            <strong>Other Phones:</strong> {props.val.additional_phones}
          </p>
        ) : (
          ''
        )}
        {`${props.val.fax}` !== 'null' ? (
          <p>
            <strong>Fax:</strong> {props.val.fax}
          </p>
        ) : (
          ''
        )}
        {`${props.val.address}` !== 'null' ? (
          <p>
            <strong>Address:</strong>{' '}
            <a
              href={`https://maps.google.com/?q=${props.val.address}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.val.address}
            </a>
          </p>
        ) : (
          ''
        )}
        {`${props.val.additional_addresses}` !== 'null' ? (
          <p>
            <strong>Other Addresses:</strong> {props.val.additional_addresses}
          </p>
        ) : (
          ''
        )}
        {`${props.val.email}` !== 'null' ? (
          <p>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${props.val.email}`}>{props.val.email}</a>
          </p>
        ) : (
          ''
        )}
        {`${props.val.website}` !== 'null' ? (
          <p>
            <strong>Website:</strong>{' '}
            <a
              href={props.val.website}
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.val.website}
            </a>
          </p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default AccordionData;
