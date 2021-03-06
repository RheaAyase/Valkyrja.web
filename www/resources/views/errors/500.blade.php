@extends('layouts.master')

@section('title', '500 Server error')

@section('content')
    <div class="middle-container">
        <div class="float-middle section-big">
            <h1>Internal Server Error</h1>
            <p>
                @if (isset($exception))
                    {{ $exception->getMessage() }}
                @else
                    Something went wrong on our end. Try to refresh or clear cache
                @endif
            </p>
        </div>
    </div>
@endsection