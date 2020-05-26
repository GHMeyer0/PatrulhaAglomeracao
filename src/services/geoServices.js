import Axios from 'axios'

const apiKey = "AIzaSyBYEECqPIORcLEuBpntcS-A9WVrFTOE23k"

export const getCoordinatesByAddress = async (address) => {
  let response = await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`)
  if (response.status == 200) {
    return {
      latitude: response.data.results[0].geometry.location.lat,
      longitude: response.data.results[0].geometry.location.lng
    }
  }
  return {
    latitude: 0,
    longitude: 0
  }

}

export const getAddressByCoordinates = async (latitude, longitude) => {
  let response = await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`)
  if (response.status == 200) {
    return response.data.results[0].formatted_address
  }
  return null

}




