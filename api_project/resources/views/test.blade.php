<form action="{{route('testView')}}" method="post" enctype="multipart/form-data">
    @csrf
    <input type="file" name="img">
    <input type="submit">
</form>