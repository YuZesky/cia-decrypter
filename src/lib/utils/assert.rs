use std::path::Path;

/// Test if a file exist
///
/// ### Arguments
/// * `path` - File to test
#[allow(non_snake_case, dead_code)]
#[no_mangle]
pub fn fileExist(path: &str) -> bool {
    return Path::new(path).exists();
}
