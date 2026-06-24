import React from 'react'
import { useSearchParams } from 'react-router'
import { Button } from '../ui/button';

export default function ResetFiltersBtn() {
    const [, setSearchParams] = useSearchParams();

    const handleFilterReset =()=>{
        setSearchParams({})
    }

  return (
    <div>
      <Button
        onClick={handleFilterReset}
        variant="outline"
        className="w-full sm:w-auto hover:bg-blue-50 transition-colors"
      >
        Clear Filters
      </Button>
    </div>
  );
}

