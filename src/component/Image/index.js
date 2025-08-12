import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/acsets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...rest }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        console.log('Error loading image:', src);
        console.log('Fallback should be:', images.avatar);
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB...'} // dummy img
            alt={alt}
            {...rest}
            onError={handleError}
        />
    );
});

export default Image;
