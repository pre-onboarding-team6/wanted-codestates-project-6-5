import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { parseQueryString } from '../utils/queryUtils';
import ArrowNarrowLeftIcon from './icons/ArrowNarrowLeftIcon';
import ArrowNarrowRightIcon from './icons/ArrowNarrowRightIcon';

export default function Paginator({ lastPage }) {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState('');
  const location = useLocation();

  useEffect(() => {
    const queries = parseQueryString(location.search);
    if (Object.keys(queries).length > 0 && queries.page) {
      const urls = [];
      Object.keys(queries).forEach((key) => {
        if (key !== 'page') {
          urls.push(`${key}=${queries[key]}`);
        }
      });
      setPage(Number(queries.page));
      setUrl(location.pathname + '?' + urls.join('&') + '&');
    } else if (Object.keys(queries).length > 0 && !queries.page) {
      const rest = location.search.split('page=')[0];
      setUrl(location.pathname + rest + '&');
    } else {
      setPage(1);
      setUrl(location.pathname + '?');
    }
  }, [location.search, location.pathname]);

  const firstItems = () => {
    const result = [];
    result.push(
      <Link
        key={1}
        className="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
        to={`${url}page=${1}`}
      >
        {1}
      </Link>,
    );
    return result;
  };
  const prevItems = () => {
    const result = [];
    for (let i = page - 3; i < page; i++) {
      if (i > 0) {
        result.push(
          <Link
            key={i}
            className="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
            to={`${url}page=${i}`}
          >
            {i}
          </Link>,
        );
      }
    }
    return result;
  };
  const currentItem = () => {
    const result = [];
    result.push(
      <Link
        key={page}
        className="inline-flex items-center pt-4 pr-1 text-sm font-medium text-indigo-600 border-t-2 border-indigo-600 hover:text-indigo-700 hover:border-gray-300"
        to={`${url}page=${page}`}
      >
        {page}
      </Link>,
    );
    return result;
  };
  const nextItems = () => {
    const result = [];
    for (let i = page + 1; i <= page + 3; i++) {
      if (i <= lastPage) {
        result.push(
          <Link
            key={i}
            className="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
            to={`${url}page=${i}`}
          >
            {i}
          </Link>,
        );
      }
    }
    return result;
  };
  const lastItems = () => {
    const result = [];
    result.push(
      <Link
        key={lastPage}
        className="inline-flex items-center pt-4 pr-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300"
        to={`${url}page=${lastPage}`}
      >
        {lastPage}
      </Link>,
    );
    return result;
  };

  return (
    <nav className="flex items-center justify-between px-4 border-t border-gray-200 sm:px-0">
      <div className="flex flex-1 w-0 -mt-px">
        <Link
          to={page > 1 ? `${url}page=${page - 1}` : `${url}page=${page}`}
          className={`${
            page > 1
              ? 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              : 'text-gray-300 pointer-events-none'
          } inline-flex items-center pt-4 pl-1 text-sm font-medium border-t-2 border-transparent`}
        >
          <ArrowNarrowLeftIcon
            className={`${
              page > 1 ? 'text-gray-400' : 'text-gray-300'
            } w-5 h-5 ml-3`}
            aria-hidden="true"
          />
          ??????
        </Link>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {page > 4 && firstItems()}
        {page > 5 && (
          <span className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent">
            ...
          </span>
        )}
        {prevItems()}
        {currentItem()}
        {page < lastPage && nextItems()}
        {page < lastPage - 4 && nextItems().length > 0 && (
          <span className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent">
            ...
          </span>
        )}
        {page < lastPage - 3 && lastItems()}
      </div>
      <div className="flex justify-end flex-1 w-0 -mt-px">
        <Link
          to={page < lastPage ? `${url}page=${page + 1}` : `${url}page=${page}`}
          className={`${
            page < lastPage
              ? 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              : 'text-gray-300 pointer-events-none'
          } inline-flex items-center pt-4 pl-1 text-sm font-medium border-t-2 border-transparent`}
        >
          ??????
          <ArrowNarrowRightIcon
            className={`${
              page < lastPage ? 'text-gray-400' : 'text-gray-300'
            } w-5 h-5 ml-3`}
            aria-hidden="true"
          />
        </Link>
      </div>
    </nav>
  );
}
