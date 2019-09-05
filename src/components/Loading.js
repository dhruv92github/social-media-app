import React from 'react'

export default function Loading() {
    return (
        <div style={{ width: "200px", margin: "auto" }}>
        <div className="spinner-grow text-primary"> </div>
        <div className="spinner-grow text-success" />
        <div className="spinner-grow text-info" />
        <div className="spinner-grow text-warning" />
        <div className="spinner-grow text-danger" />
        <div className="spinner-grow text-secondary" />
        <p>loading...</p>
      </div>
    )
}
