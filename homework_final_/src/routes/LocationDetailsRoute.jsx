import React from 'react'
import LocationDetails from '../components/locations/LocationDetails';
import { useParams, useNavigate } from "react-router"
import { useLocation } from "../hooks/useLocation"
import { useFavStore } from '@/store/favoritesStore';
import { useAuthStore } from "../store/authStore"
import ErrorRoute from "./ErrorRoute"


export default function LocationDetailsRoute() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: location = {}, isLoading, isError, error } = useLocation(id)
  const isFavourite = useFavStore((state) => state.isFavourite)
  const toggleFavourite = useFavStore((state) => state.toggleFavourite)
  const userId = useAuthStore((state) => state.user).id

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>{error.message}</p>
  if (!Object.keys(location).length) return <ErrorRoute />

  const handleToggle = () => {
    toggleFavourite(userId, location.id)
    navigate(`/dashboard/location/${id}`)
  }

  const chartData = location.monthlyStats?.map((value, index) => ({
    month: `M${index + 1}`,
    shipments: value,
  }))

  return (
    <LocationDetails
      location={location}
      chartData={chartData}
      isFavourite={isFavourite(userId, location.id)}
      onToggleFavourite={handleToggle}
    />
  )
}