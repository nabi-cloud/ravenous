import React from "react";
import styles from "./Business.module.css";

function Business({ data }) {
    return (
        <div className={ styles.business }>
            <img
                className={ styles.businessImage }
                alt={ data.name }
                src={ data.imageSrc }
            />

            <div className={ styles.nameContainer }>
                <h2 className={ styles.businessName }>
                    { data.name }
                </h2>
            </div>

            <div className={ styles.businessInfo }>
                <div className={ styles.address }>
                    <p>{ data.address }</p>
                    <p>{ data.city }</p>
                    <p>{ data.state } { data.zipCode }</p>
                </div>

                <div className={ styles.score }>
                    <h3 className={ styles.category }>
                        { data.category }
                    </h3>
                    <p className={ styles.rating }>
                        { data.rating } stars
                    </p>
                    <p className={ styles.reviews }>
                        { data.reviewCount } reviews
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Business;