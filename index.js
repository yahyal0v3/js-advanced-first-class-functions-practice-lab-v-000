// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  const driversCopy = [...drivers]
  return driversCopy.sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  const driversCopy = [...drivers]
  return driversCopy.sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  const driversCopy = [...drivers]
  return driversCopy.reduce((total, driver) => total + driver.revenue)
}
