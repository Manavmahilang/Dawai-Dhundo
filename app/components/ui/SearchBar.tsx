'use client'
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';

interface Props {
  placeholder?: string;
}

const SearchBar: React.FC<Props> = ({ placeholder = 'Search...' }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      const url = `/search?q=${encodeURIComponent(query)}`;
      return (
        <Link href={url}>
          <a>Search Results</a>
        </Link>
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22 22l-6-6"></path>
              <circle cx="10" cy="10" r="8"></circle>
            </svg>
          </button>
        </span>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="py-2 pl-10 text-sm text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:border-gray-400 hover:border-gray-400"
          placeholder={placeholder}
        />
      </div>
    </form>
  );
};

export default SearchBar;
